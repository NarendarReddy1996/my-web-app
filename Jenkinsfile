pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps { git branch: 'main', url: 'https://github.com/yourusername/your-repo.git' }
        }
        stage('Build') {
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
        stage('Docker Build') {
            steps { script { docker.build("my-web-app:${BUILD_ID}") } }
        }
        stage('Deploy') {
            steps { script { sh 'docker stop web-app || true && docker rm web-app || true && docker run -d --name web-app -p 3000:3000 my-web-app:${BUILD_ID}' } }
        }
    }
}
