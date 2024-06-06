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