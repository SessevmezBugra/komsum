pipeline {

    agent any

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t bsessevmez/komsum-ui-app:0.0.1 .'
                sh 'docker rm -f komsum-ui-app'
            }
        }


        stage('Run') {
            steps {
                sh 'docker run -d -e VIRTUAL_HOST=komsumdannehaber.com -e LETSENCRYPT_HOST=komsumdannehaber.com -e LETSENCRYPT_EMAIL=sessevmezbugra@gmail.com -p 9001:80 --name komsum-ui-app bsessevmez/komsum-ui-app:0.0.1'
            }
        }

    }
}
