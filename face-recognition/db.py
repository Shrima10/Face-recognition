import pickle
import os

ENCODINGS_PATH = 'models/encodings.pkl'

def save_encoding(name, encoding, timestamp):
    if os.path.exists(ENCODINGS_PATH):
        with open(ENCODINGS_PATH, 'rb') as f:
            data = pickle.load(f)
    else:
        data = {}

    data[name] = {'encoding': encoding, 'timestamp': timestamp}

    with open(ENCODINGS_PATH, 'wb') as f:
        pickle.dump(data, f)

def load_encodings():
    if os.path.exists(ENCODINGS_PATH):
        with open(ENCODINGS_PATH, 'rb') as f:
            return pickle.load(f)
    return {}
