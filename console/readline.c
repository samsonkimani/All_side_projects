#include<stdio.h>
#include<stdlib.h>


int main(){
	char *buffer = NULL;
	size_t buffersize = 0;
	ssize_t characters_read;

	while (1) {
		printf("$ ");
		characters_read = getline(&buffer, &buffersize, stdin);

		if (characters_read == -1) {
			break;
		}
		printf("%s", buffer);
	}

	free(buffer);
	return (0);
}
		

