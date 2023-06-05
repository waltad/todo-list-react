import { useState, useEffect } from "react";

const getInitialTasks = (localStorageKey) => JSON.parse(localStorage.getItem(localStorageKey)) || [];

export const useTasks = (localStorageKey) => {
	
	getInitialTasks(localStorageKey);

	const [tasks, setTasks] = useState(getInitialTasks);

	useEffect((localStorageKey) => {
		localStorage.setItem(localStorageKey, JSON.stringify(tasks));
	}, [tasks]);

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	const toggleTaskDone = (id) => {
		setTasks(tasks => tasks.map(task => {
			return task.id === id ? { ...task, done: !task.done } : task;
		}));
	};

	const setAllDone = () => {
		setTasks(tasks => tasks.map(task => ({
			...task,
			done: true
		})));
	};

	const addNewTask = (content) => {
		setTasks(tasks => [
			...tasks,
			{
				content,
				done: false,
				id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
			},
		]);
	};

	return {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask};
};