from app import app, db
from flask import render_template, redirect, url_for, flash, request
from app.models import User, Post, Like, Comment
from app.forms import RegistrationForm, LoginForm, PostForm, CommentForm

@app.route("/")
def home():
    posts = Post.query.all()
    return render_template("home.html", posts=posts)

# Add other routes here for registration, login, profile, creating post, updating post, notifications, chat, etc.
