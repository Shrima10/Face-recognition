import cv2
import face_recognition
import pickle
from db import load_encodings

def recognize_faces():
    known_faces = load_encodings()
    known_names = list(known_faces.keys())
    known_encodings = [known_faces[name]['encoding'] for name in known_names]

    video_capture = cv2.VideoCapture(0)

    while True:
        ret, frame = video_capture.read()
        if not ret:
            continue

        rgb_frame = frame[:, :, ::-1]

        face_locations = face_recognition.face_locations(rgb_frame)
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

        for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
            matches = face_recognition.compare_faces(known_encodings, face_encoding)
            name = "Unknown"

            if True in matches:
                first_match_index = matches.index(True)
                name = known_names[first_match_index]

            cv2.rectangle
