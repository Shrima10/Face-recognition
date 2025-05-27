import asyncio
import websockets
from dotenv import load_dotenv
import os
from query_handler import handle_query


load_dotenv()
PORT = 8765

async def rag_server(websocket):
    async for message in websocket:
        print(f"Received query: {message}")
        response = handle_query(message)
        await websocket.send(response)

async def main():
    print(f"RAG server listening on port {PORT}")
    async with websockets.serve(rag_server, "localhost", PORT):
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
