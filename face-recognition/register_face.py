import cv2
import os
from datetime import datetime

# Load OpenCV's built-in face detector
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def register_face():
    # Open webcam
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("❌ Error: Cannot access the webcam")
        return

    print("📷 Press 's' to save face | Press 'q' to quit")

    while True:
        ret, frame = cap.read()
        if not ret:
            print("❌ Failed to capture frame")
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

        for (x, y, w, h) in faces:
            # Draw a rectangle around the face
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Show the frame with rectangles
        cv2.imshow("Register Face", frame)

        key = cv2.waitKey(1) & 0xFF

        # Save face when 's' is pressed
        if key == ord('s') and len(faces) > 0:
            (x, y, w, h) = faces[0]
            face_img = frame[y:y + h, x:x + w]

            # Create output folder if it doesn't exist
            os.makedirs("captured_faces", exist_ok=True)

            # Save with timestamp
            filename = f"captured_faces/face_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpg"
            cv2.imwrite(filename, face_img)
            print(f"✅ Face saved to {filename}")

        # Exit on 'q'
        elif key == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    register_face()
