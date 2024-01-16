const appwrite = window.Appwrite;

const client = new appwrite.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("659559a04276a63f9c5e");

const account = new appwrite.Account(client);

account.createOAuth2Session("google", "/success.html", "/error.html");
