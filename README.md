# QuickEatz
### A recipe builder web app that finds recipes based on the ingredients you have available

![CleanShot 2024-04-12 at 17 54 20@2x](https://github.com/EdrikC/CS310-project/assets/121407105/d24e9a4d-b0da-48cd-988f-79a1a971fd53)
### Set up⁠⁠

**For Flask:**

Setting up Flask on python env (VsCode)

1. ⇧⌘P Python: Create Environment
2. ⇧⌘P⁠⁠ Terminal: Create New Terminal 
- Note for windows:
    - **Terminal: Select Default Profile** to set "Command Prompt" as your default instead.

3. In the terminal run: `⁠python3 -m pip install flask` 
- Make sure there is a .(venv) prefix in the terminal
- If not run ``⁠source .venv/bin/activate`` (MacOS)
- Or ``⁠.venv\Scripts\Activate.ps1`` (Windows)

**For npm/react/flask api packages:**  

```
pip install nodeenv

nodeenv -p

npm install react react-dom

pip install python-dotenv

pip install Flask-Cors

npm install react-awesome-reveal @emotion/react --save

pip install requests
```
### Run instructions from terminal
**Make sure you are using the virtual environment for both terminals (there should be a .venv prefix in the terminal**)
1. Open two seperate terminals (one to run the back end and one for the front end)
2. On the first one run ``npm run dev`` to start the React application.
3. On the second one run ``npm run start-api`` or ``npm run start-api-windows`` if on windows.

Now both the front and back end should be connected.\
Note: Whenever a change is done to any of the API endpoints the flask server must be restarted.\
``Ctrl+C`` to stop then refer back to step 3 to reinitialize the Flask API
