pipeline {
    agent any
    stages {
        stage('Prepare Minikube') {
            steps {
                script{
                    sh "minikube start"     
                    sh 'eval $(minikube docker-env)'
               }
            }
        }
        stage('Test') {
            steps{
                dir('nodejs-server'){
                    sh "npm install"
                    sh "npm run test"
                }   
             }
         }
        stage('Build') {
            steps{
                dir('nodejs-server'){
                
                    sh "docker build -t nodejs-server ."

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