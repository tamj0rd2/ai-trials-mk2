<script lang="ts">
  import { onMount } from 'svelte'
  type Task = { title: string; completed: boolean }
  let tasks: Task[] = []
  let newTaskTitle = ''

  onMount(() => {
    const stored = localStorage.getItem('tasks')
    tasks = stored ? JSON.parse(stored) : []
  })

  function addTask() {
    const task = { title: newTaskTitle, completed: false }
    tasks = [...tasks, task]
    localStorage.setItem('tasks', JSON.stringify(tasks))
    newTaskTitle = ''
  }
</script>

<main>
  <form on:submit|preventDefault={addTask}>
    <label for="task-title">Task</label>
    <input
      id="task-title"
      type="text"
      bind:value={newTaskTitle}
      placeholder="Enter task title"
      aria-label="Task title"
    />
    <button type="submit">Add</button>
  </form>
  <ul>
    {#each tasks as task}
      <li><span>{task.title}</span></li>
    {/each}
  </ul>
</main>
