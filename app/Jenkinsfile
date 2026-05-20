pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/RishiSharma45/CloudOps-Live.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloudops-live .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop cloudops-container || true'
                sh 'docker rm cloudops-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name cloudops-container cloudops-live'
            }
        }
    }
}