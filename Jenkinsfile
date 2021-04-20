pipeline {

    agent any

    stages {

        stage('Build') {
            steps {
                sh '''

                    docker build -t bsessevmez/komsum-ui-app:0.0.1 . 

                '''
            }
        }


        stage('Run') {
            steps {
                sh 'docker stop komsum-ui-app'
                sh 'docker run -d -p 8081:80 --rm --name komsum-ui-app bsessevmez/komsum-ui-app:0.0.1'
            }
        }

    }
}