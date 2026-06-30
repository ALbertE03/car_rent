import os
from dotenv import load_dotenv

load_dotenv()

POSTGRES_USER = os.getenv("POSTGRES_USER",'ecotrans')
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD","ecotrans123")
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://backend:backend123@localhost:5433/backend")
SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

API_V1_PREFIX = "/api/v1"
