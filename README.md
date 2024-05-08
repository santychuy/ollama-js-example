# Trying Ollama JS Library

With the purpose of interact with Ollama using Llama 3 Model to use it on a Node Express app. Very easy to use with this basic example.

## Test it

1. Run the services inside the `docker-compose.yml` file

```sh
docker compose up -d
```

2. We're gonna pull the Llama3 model inside the **ollama container**

```sh
docker exec -it ollama-example ollama pull llama3
```

3. After pulling the model correctly, you can start using the `http://127.0.0.1:3000/chat` `POST` endpoint locally
