# uisf-foyer on kubernetes

Files in this folder can be used to deploy this LWC app to a k8s cluster.

## Prerequisites
- Docker Desktop 
- Enable Kubernetes Cluster in Docker Desktop: https://docs.docker.com/desktop/kubernetes/
- Verify that you can see the `docker-desktop` cluster: `kubectl config view`

## Important Files
The `Dockerfile` file that sits on the top level of this directory is used by docker to create the image of the
container. This image will be used in the configuration of the k8s cluster via the `deployment.yaml` file. The
`.yaml` file is used to describe Kubernetes objects and can be used to easily create and destroy your app in any
Kubernetes environment. Read more at the [offical docker docs](https://docs.docker.com/get-started/kube-deploy/).

## Quickstart to Deploy Locally
After configuring the `Dockerfile` and `local-deployment.yaml` to your liking (it is already set to a basic configuration),
simple run the script in `/k8s/scripts/run_docker.sh`.

Access the app via `localhost:30001`.
## Important Commands
### view deployed pods
`kubectl get pods`

### view k8 deployments
`kubectl get deployments`
### view services
`kubectl get services`

### kill k8 clusters
`kubectl delete -f ./k8s/specs/local-deployment.yaml` (assuming you are in the top-level directory)

## Quickstart to Deploy to GKE (Google Kubernetes Engine)
### Before Beginning
1. Visit [GKE](https://console.cloud.google.com/projectselector2/kubernetes)
2. Create/select a project
3. Ensure the billing is enabled for your GCP project
4. create a cluster via GKE
5. Going into IAM > Service Accounts, generate a new key and save it as `GKE_SA_KEY` in Github secrets
6. From the GCP Dashboard get the Project ID, and save it as `GKE_PROJECT` in Github secrets

### CI/CD Pipline via Github Actions
CI/CD is built into this repo. the pipline in defined under `/.github/workflows`. Container images are
created under the connected GCP account and a new deployment and service are also executed, for every 
push to branch main.

