#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>

#define MAX_INPUT_LENGTH 100

int main() {
	char input[MAX_INPUT_LENGTH];

	while(1) {
		printf("#cisfun$ ");

		if (fgets(input, sizeof(input), stdin) == NULL) {
			perror("fgets error");
			exit(EXIT_FAILURE);
		}

		input[strcspn(input, "\n")] = '\0';

		pid_t child_pid = fork();

		if (child_pid == -1) {
			perror("fork error");
			exit(EXIT_FAILURE);
		} else if (child_pid == 0) {
			char* command = strtok(input, " ");

			if (command != NULL) {
				char *args[] = {command, NULL};
				execve(command, args, NULL);
				perror("execv error");
				exit(EXIT_FAILURE);
			}

			exit(EXIT_SUCCESS);
		}else {
			int status;
			waitpid(child_pid, &status, 0);
		}
	}
	return 0;
}
