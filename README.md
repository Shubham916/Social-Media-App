# Social Media Application

## Description

This is a social media platform developed using Flask, a Python web framework. The application allows users to create profiles, post updates, follow other users, and interact through comments and likes. It also includes real-time features such as chat or live notifications. Media uploads are stored using cloud storage integration (e.g., AWS S3).

## Features

- User authentication and authorization
- User profiles with profile pictures
- Posting updates with text and media files
- Following/unfollowing other users
- Liking and commenting on posts
- Real-time chat or live notifications
- Cloud storage integration for media uploads

## Technologies Used

- Flask: Python web framework
- SQLAlchemy: SQL toolkit and Object-Relational Mapping (ORM) for database operations
- Flask-SocketIO: WebSocket support for real-time features
- Flask-WTF: Forms handling and validation
- Flask-Login: User session management
- Cloud storage service (e.g., AWS S3) for media uploads

## Installation

1. Clone the repository:
git clone https://github.com/your-username/social-media-app.git


2. Install dependencies:
pip install -r requirements.txt


3. Set up environment variables:

export SECRET_KEY='your_secret_key'
export SQLALCHEMY_DATABASE_URI='sqlite:///your_database.db'
export S3_BUCKET='your_bucket_name'



4. Run the application:
flask run


5. Access the application in your web browser at http://localhost:5000.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

