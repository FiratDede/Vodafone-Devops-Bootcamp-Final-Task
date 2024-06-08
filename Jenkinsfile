pipeline {
    agent any
    stages {
        stage('Test And Build') {
            steps{
                dir('nodejs-server'){
                    sh "docker build -t firatdede/nodejs-server:latest ."
                }  
               
            }
        }
        stage('Push Image') {
            steps{ 
                withDockerRegistry(credentialsId: 'docker_hub_credentials', url: 'https://index.docker.io/v1/') {
                    sh "docker push firatdede/nodejs-server:latest" 
                }
            }
        }
        stage('Deploy') {
            steps{
                dir('nodejs-server'){
                    sh "kubectl apply -f nodejs-server-deployment-service.yaml"
                }   
             }
        }
    }
}