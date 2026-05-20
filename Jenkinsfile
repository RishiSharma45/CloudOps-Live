pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh 'docker build -t cloudops-live .'
                }
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