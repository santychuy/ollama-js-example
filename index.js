import ollama from "ollama";
import ora from "ora";

const useLlama = async (msg) => {
  const spinner = ora("Creating response...");

  try {
    spinner.start();
    const response = await ollama.chat({
      model: "llama3",
      messages: [{ role: "user", content: msg }],
    });

    spinner.succeed();

    console.log(response.message.content);
  } catch (error) {
    throw new Error(error);
  }
};

useLlama("Why is the sky blue?");
