from fastapi import FastAPI
from geetest import Validator

app = FastAPI()

@app.get("/verify")
def verify(gt: str, challenge: str, token: str):
    try:
        validator = Validator()
        validate_string = validator.validate(gt, challenge)
        data = {
                    "success": True,
                    "challenge": challenge,
                    "validate": validate_string,
                    "seccode": validate_string,
            }
        if validate_string == "":
            data["success"] = False
            
        return data
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)