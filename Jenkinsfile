pipeline {
    agent any
    stages {
        stage('Change Minikube Docker Env'){
            steps{
                  script {
                    def dockerEnv = sh(script: 'eval $(minikube docker-env)', returnStdout: true).trim()
                    // Çıktıyı değerlendir
                  
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

                    sh "minikube image load nodejs-server"
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