Desafio 3 - Deploy no Kubernetes
Informações do desafio
Nesse desafio, você deverá gerar os manifestos yaml do Kubernetes (deployment e service) para o backend e o frontend que criados no desafio 2.
Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).
Crie uma pasta chamada k8s no seu repositório do github (utilizado no desafio anterior) e informe no campo abaixo.


* Criar cluster:
kind create cluster --name=desafio3

* Após criação, settar contexto:
kubectl cluster-info --context kind-desafio3



* Criação dos Pods e Service do Backend
kubectl apply -f k8s/backend_deployment.yaml
kubectl apply -f k8s/backend_service.yaml


* Criação dos Pods e Service do Frontend
kubectl apply -f k8s/frontend_deployment.yaml
kubectl apply -f k8s/frontend_service.yaml


* Validar se Pods estão rodando:
kubectl get pods


* Testar a Aplicação
kubectl port-forward service/backend-service 3000:3000
- Acessar http://localhost:3000/routes

kubectl port-forward service/frontend-service 3001:3001
- Acessar http://localhost:3001
