pipeline {
    agent any
    environment {
        IMAGE_NAME = "my-web-app"
        DOCKER_TAG = "${BUILD_ID}"
    }
    stages {
        stage('Checkout') {
            steps { git branch: 'main', url: 'https://github.com/NarendarReddy1996/my-web-app.git' }
        }
        stage('Build') { steps { sh 'npm install' } }
        stage('Test') { steps { sh 'npm test' } }
        stage('Docker Build') { steps { script { docker.build("${IMAGE_NAME}:${DOCKER_TAG}") } } }
        stage('Deploy') {
            steps { 
                script { 
                    sh 'docker stop web-app || true && docker rm web-app || true && docker run -d --name web-app -p 3000:3000 my-web-app:${DOCKER_TAG}' 
                }
            }
        }
    }
    post {
        success { echo "Pipeline Success: App deployed!" }
        failure { echo "Pipeline Failed" }
    }
}

