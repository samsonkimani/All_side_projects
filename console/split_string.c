#include<stdio.h>
#include<string.h>
#include<stdlib.h>

#define MAX_WORDS 100
#define MAX_WORD_LENGTH 50


char** splitString(const char* input, const char* delimeter, int* numWords) {
	char** words = (char**)malloc(MAX_WORDS * sizeof(char*));
	if (words == NULL) {
		exit(EXIT_FAILURE);
	}

	char* token;
	char* copy = strdup(input);
	token = strtok(copy, delimeter);

	*numWords = 0;
	while (token != NULL && *numWords < MAX_WORDS) {
		words[*numWords] = strdup(token);
		(*numWords)++;
		token = strtok(NULL, delimeter);
	}

	free(copy);
	return words;
}

int main() {
	char* input = NULL;
	size_t buffersize = 0;
	int read;
	const char* delimeter = " ";
	int numWords = 0;
	
	while (1) {

		printf("$ ");
		read = getline(&input, &buffersize, stdin);
		if (read == -1) {
			return 1;
		}

		if (input[read -1] == '\n'){
			input[read - 1] = '\0';
		}

		char **words = splitString(input, delimeter, &numWords);
		printf("number of words: %d\n", numWords);

		for (int i = 0; i < numWords; i++) {
			printf("word %d: %s\n", i + 1, words[i]);
			free(words[i]);
		}
		free(words);
	}
	free(input);

	return 0;
}
