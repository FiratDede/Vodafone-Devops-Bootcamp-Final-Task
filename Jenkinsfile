pipeline {
    agent any
    stages {
        stage('Change Minikube Docker Env'){
            steps{
                    sh "minikube docker-env | sh"
            }
        }
        
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
                    sh "docker build -t nodejs-server --target prod ."
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