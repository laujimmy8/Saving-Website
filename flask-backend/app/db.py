from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv('.env')
uri = os.getenv('MONGO_URI')

def get_db():   
    client = MongoClient(uri)
    db = client.Savings
    return db
