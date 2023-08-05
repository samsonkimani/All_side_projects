#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>

int main(void) {
	char* argv[] = {"/bin/ls", "-l", NULL};

	int result = execve(argv[0], argv, NULL);

	if (result == -1) {
		perror("execve");
		return 1;
	}

	return 0;
}
