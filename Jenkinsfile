pipeline {
  agent any

  stages {
    stage('Install application dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build application') {
      steps {
        withCredentials([string(credentialsId: 'BACKEND_API', variable: 'BACKEND_API'), string(credentialsId: 'BACKEND_PORT', variable: 'BACKEND_PORT')]) {
          sh 'npm run build'
        }
      }
    }
    stage('Export application') {
      steps {
        sh 'npm run export'
      }
    }

    stage('Deploy to S3') {
      environment {
        AWS_ACCESS_KEY_ID = credentials('aws_access_key_id')
        AWS_SECRET_ACCESS_KEY = credentials('aws_secret_access_key')
        AWS_DEFAULT_REGION = 'ap-southeast-2'
      }
      steps {//use aws pipeline plugin
        withAWS(){
          s3Upload(file:'out', bucket:'www.fotopie.zqwang.net')
        }
        
      }
    }
  }
}