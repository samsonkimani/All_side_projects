#!/bin/bash

get_pid_max() {
	local pid_max_file="/proc/sys/kernel/pid_max"
	if [ -f "$pid_max_file" ]; then
		cat "$pid_max_file"
	else
		echo "Error: $pid_max_file does not exist"
		exit 1
	fi
}

max_pid=$(get_pid_max)
echo "maximum pid value: $max_pid"
