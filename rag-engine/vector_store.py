from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.docstore.document import Document
import os

DB_FAISS_PATH = "faiss_index"

def load_vectorstore():
    if os.path.exists(DB_FAISS_PATH):
        return FAISS.load_local(DB_FAISS_PATH, OpenAIEmbeddings())
    else:
        return None

def save_docs_to_vectorstore(docs):
    documents = [Document(page_content=doc) for doc in docs]
    vectorstore = FAISS.from_documents(documents, OpenAIEmbeddings())
    vectorstore.save_local(DB_FAISS_PATH)
    return vectorstore
