# AI-Powered News

AI-Powered News is a web application that analyzes news headlines and evaluates their likelihood of being conspiratorial or misleading. It utilizes OpenAI's GPT-4 model to score headlines based on specific criteria and provides sentiment analysis.

## Features
- **Headline Analysis:** Assigns a score (0-100) indicating the likelihood of a headline being misleading.
- **Sentiment Detection:** Analyzes the emotional tone of the headline.
- **Real-time API Integration:** Uses OpenAI's API for AI-driven analysis.
- **Modern Tech Stack:** Built using React.js, Express.js, and OpenAI's API.

## Tech Stack
- **Frontend:** React.js (Vite)
- **Backend:** Node.js, Express.js
- **AI Model:** OpenAI GPT-4 API

## Installation

### Prerequisites
- Node.js and npm installed
- OpenAI API key

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/kri04sna/AI-Powered-News.git
   cd AI-Powered-News
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key:
     ```env
     OPENAI_API_KEY=your_openai_api_key_here
     ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Enter a news headline in the input field.
2. Click "Analyze" to get an AI-powered evaluation.
3. View the analysis score and sentiment insights.

## Contribution
Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

## License
This project is licensed under the MIT License.

## Author
Developed by **Krishna Kumar**

---

⭐ Star the repository if you found it useful!
