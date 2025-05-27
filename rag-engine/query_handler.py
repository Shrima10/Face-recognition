from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI
from .vector_store import load_vectorstore

def handle_query(query):
    vectorstore = load_vectorstore()
    if not vectorstore:
        return "No documents in vector store."
    
    retriever = vectorstore.as_retriever()
    llm = ChatOpenAI(temperature=0)
    qa = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
    return qa.run(query)
