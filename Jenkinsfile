pipeline {
    agent any
    stages {
   
        
        stage('Test') {
            steps{
                dir('nodejs-server'){
                    sh "docker build -t nodejs-server-test --target test ."
                    sh "docker rmi nodejs-server-test"

                }   
             }
         }
        stage('Build') {
            steps{
                dir('nodejs-server'){
                    sh "docker build -t firatdede/nodejs-server:latest --target prod ."
                }  
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