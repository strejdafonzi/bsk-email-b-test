<template>
    <div class="flex h-screen">
      <!-- Monsternight (Dark) Theme -->
      <div class="w-1/2 bg-base-100 text-base-content p-6 overflow-y-auto" data-theme="monsternight">

        <!-- Texts -->
        <div class="flex w-full flex-col">
            <p class="font-mono">>> monsternight</p>
            <div class="divider mb-10">TEXTS</div>
        </div>
        <h1 class="text-4xl font-bold mb-2">H1 Heading</h1>
        <h1 class="text-4xl font-bold mb-2 grad">H1 Heading with gradient bg</h1>
        <h2 class="text-3xl font-semibold mb-2">H2 Heading</h2>
        <h3 class="text-2xl font-medium mb-4">H3 Heading</h3>
        <p class="mb-4">This is a sample paragraph demonstrating body text under the "monsternight" theme.</p>
  
        <!-- Buttons -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">BUTTONS</div>
        </div>
        <div class="space-y-2 mb-4">
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary btn-md">Primary</button>
            <button class="btn btn-secondary btn-md">Secondary</button>
            <button class="btn btn-accent btn-md">Accent</button>
            <button class="btn btn-neutral btn-md">Neutral</button>
            <button class="btn btn-ghost btn-md">Ghost</button>
            <button class="btn btn-success btn-md">Success</button>
            <button class="btn btn-info btn-md">Info</button>
            <button class="btn btn-warning btn-md">Warning</button>
            <button class="btn btn-error btn-md">Error</button>
          </div>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary btn-lg">Primary LG</button>
            <button class="btn btn-secondary btn-lg">Secondary LG</button>
            <button class="btn btn-accent btn-lg">Accent LG</button>
          </div>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary btn-xl">Primary XL</button>
            <button class="btn btn-secondary btn-xl">Secondary XL</button>
          </div>
        </div>
  
        <!-- Badges -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">BADGES</div>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <div class="badge badge-primary">Primary</div>
          <div class="badge badge-accent">Accent</div>
          <div class="badge badge-info">Info</div>
          <div class="badge badge-warning">Warning</div>
          <div class="badge badge-error">Error</div>
        </div>
  
        <!-- Inputs -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">INPUTS</div>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <input type="text" placeholder="Neutral input" class="input input-neural" />
          <input type="text" placeholder="Primary input" class="input input-primary" />
          <input type="text" placeholder="Secondary input" class="input input-secondary" />
          <input type="text" placeholder="Error input" class="input input-error" />
          <input type="text" placeholder="Ghost input" class="input input-ghost" />
        </div>
  
        <!-- Toggles -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">TOGGLES</div>
        </div>
        <div class="flex flex-wrap gap-4 mb-4">
          <label class="cursor-pointer label gap-2">
            <span>Primary</span>
            <input type="checkbox" class="toggle toggle-primary" />
          </label>
          <label class="cursor-pointer label gap-2">
            <span>Secondary</span>
            <input type="checkbox" class="toggle toggle-secondary" />
          </label>
          <label class="cursor-pointer label gap-2">
            <span>Accent</span>
            <input type="checkbox" class="toggle toggle-accent" />
          </label>
        </div>
  
         <!-- Checkboxes -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">CHECKBOXES</div>
        </div>
        <div class="flex flex-wrap gap-4 mb-4">
          <label class="label cursor-pointer gap-2">
            <span>Neutral</span>
            <input type="checkbox" class="checkbox checkbox-neutral" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Primary</span>
            <input type="checkbox" class="checkbox checkbox-primary" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Secondary</span>
            <input type="checkbox" class="checkbox checkbox-secondary" />
          </label>
        </div>
  
         <!-- Radios -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">RADIOS</div>
        </div>
        <div class="flex flex-wrap gap-4 mb-6">
          <label class="label cursor-pointer gap-2">
            <span>Neutral</span>
            <input type="radio" name="radio-dark" class="radio radio-neutral" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Primary</span>
            <input type="radio" name="radio-dark" class="radio radio-primary" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Secondary</span>
            <input type="radio" name="radio-dark" class="radio radio-secondary" />
          </label>
        </div>
  
         <!-- Error Message -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">ERROR MESSAGE</div>
        </div>
        <div class="flex w-fit justify-center items-center mx-auto">
          <span class="errorbox">
            <span class="text-sm animate-ping mr-2">🚨</span>
            This is a placeholder error message with a flashing emoji.
          </span>
        </div>
  
         <!-- COLOURS -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">COLOURS</div>
        </div>
        <div class="grid grid-cols-3 gap-2 mb-6 text-center">
          <div class="bg-base-100 p-4 rounded">base-100</div>
          <div class="bg-base-200 p-4 rounded">base-200</div>
          <div class="bg-base-300 p-4 rounded">base-300</div>
          <!-- Monster custom colors -->
          <div class="p-4 rounded bg-gre-l">gre-l</div>
          <div class="p-4 rounded bg-gre-m">gre-m</div>
          <div class="p-4 rounded bg-gre-d">gre-d</div>
  
          <div class="p-4 rounded bg-blu-l">blu-l</div>
          <div class="p-4 rounded bg-blu-m">blu-m</div>
          <div class="p-4 rounded bg-blu-d">blu-d</div>
          <div class="p-4 rounded bg-blu-x">blu-x</div>
        </div>
      </div>
  
      <!-- Monsterday (Light) Theme -->
      <div class="w-1/2 bg-base-100 text-base-content p-6 overflow-y-auto" data-theme="monsterday">

        <!-- Texts -->
        <div class="flex w-full flex-col">
            <p class="font-mono">>> monsterday</p>
            <div class="divider mb-10">TEXTS</div>
        </div>
        <h1 class="text-4xl font-bold mb-2">H1 Heading</h1>
        <h1 class="text-4xl font-bold mb-2 grad">H1 Heading with gradient bg</h1>
        <h2 class="text-3xl font-semibold mb-2">H2 Heading</h2>
        <h3 class="text-2xl font-medium mb-4">H3 Heading</h3>
        <p class="mb-4">This is a sample paragraph demonstrating body text under the "monsterday" theme.</p>
  
        <!-- Buttons -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">BUTTONS</div>
        </div>
        <div class="space-y-2 mb-4">
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary btn-md">Primary</button>
            <button class="btn btn-secondary btn-md">Secondary</button>
            <button class="btn btn-accent btn-md">Accent</button>
            <button class="btn btn-neutral btn-md">Neutral</button>
            <button class="btn btn-ghost btn-md">Ghost</button>
            <button class="btn btn-success btn-md">Success</button>
            <button class="btn btn-info btn-md">Info</button>
            <button class="btn btn-warning btn-md">Warning</button>
            <button class="btn btn-error btn-md">Error</button>
          </div>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary btn-lg">Primary LG</button>
            <button class="btn btn-secondary btn-lg">Secondary LG</button>
            <button class="btn btn-accent btn-lg">Accent LG</button>
          </div>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary btn-xl">Primary XL</button>
            <button class="btn btn-secondary btn-xl">Secondary XL</button>
          </div>
        </div>
  
        <!-- Badges -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">BADGES</div>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <div class="badge badge-primary">Primary</div>
          <div class="badge badge-accent">Accent</div>
          <div class="badge badge-info">Info</div>
          <div class="badge badge-warning">Warning</div>
          <div class="badge badge-error">Error</div>
        </div>
  
        <!-- Inputs -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">INPUTS</div>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <input type="text" placeholder="Neutral input" class="input input-neural" />
          <input type="text" placeholder="Primary input" class="input input-primary" />
          <input type="text" placeholder="Secondary input" class="input input-secondary" />
          <input type="text" placeholder="Error input" class="input input-error" />
          <input type="text" placeholder="Ghost input" class="input input-ghost" />
        </div>
  
        <!-- Toggles -->
        <div class="flex w-full flex-col">
            <div class="divider mb-10">TOGGLES</div>
        </div>
        <div class="flex flex-wrap gap-4 mb-4">
          <label class="cursor-pointer label gap-2">
            <span>Primary</span>
            <input type="checkbox" class="toggle toggle-primary" />
          </label>
          <label class="cursor-pointer label gap-2">
            <span>Secondary</span>
            <input type="checkbox" class="toggle toggle-secondary" />
          </label>
          <label class="cursor-pointer label gap-2">
            <span>Accent</span>
            <input type="checkbox" class="toggle toggle-accent" />
          </label>
        </div>
  
         <!-- Checkboxes -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">CHECKBOXES</div>
        </div>
        <div class="flex flex-wrap gap-4 mb-4">
          <label class="label cursor-pointer gap-2">
            <span>Neutral</span>
            <input type="checkbox" class="checkbox checkbox-neutral" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Primary</span>
            <input type="checkbox" class="checkbox checkbox-primary" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Secondary</span>
            <input type="checkbox" class="checkbox checkbox-secondary" />
          </label>
        </div>
  
         <!-- Radios -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">RADIOS</div>
        </div>
        <div class="flex flex-wrap gap-4 mb-6">
          <label class="label cursor-pointer gap-2">
            <span>Neutral</span>
            <input type="radio" name="radio-light" class="radio radio-neutral" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Primary</span>
            <input type="radio" name="radio-light" class="radio radio-primary" />
          </label>
          <label class="label cursor-pointer gap-2">
            <span>Secondary</span>
            <input type="radio" name="radio-light" class="radio radio-secondary" />
          </label>
        </div>
  
         <!-- Error Message -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">ERROR MESSAGE</div>
        </div>
        <div class="flex w-fit justify-center items-center mx-auto">
          <span class="errorbox">
            <span class="text-sm animate-ping mr-2">🚨</span>
            This is a placeholder error message with a flashing emoji.
          </span>
        </div>
  
         <!-- COLOURS -->
         <div class="flex w-full flex-col">
            <div class="divider mb-10">COLOURS</div>
        </div>
        <div class="grid grid-cols-3 gap-2 mb-6 text-center">
          <div class="bg-base-100 p-4 rounded">base-100</div>
          <div class="bg-base-200 p-4 rounded">base-200</div>
          <div class="bg-base-300 p-4 rounded">base-300</div>
          <!-- Monster custom colors -->
          <div class="p-4 rounded bg-gre-l">gre-l</div>
          <div class="p-4 rounded bg-gre-m">gre-m</div>
          <div class="p-4 rounded bg-gre-d">gre-d</div>

  
          <div class="p-4 rounded bg-blu-l">blu-l</div>
          <div class="p-4 rounded bg-blu-m text-zinc-50">blu-m</div>
          <div class="p-4 rounded bg-blu-d text-zinc-50">blu-d</div>
          <div class="p-4 rounded bg-blu-x text-zinc-50">blu-x</div>
        </div>
      </div>
    </div>
  </template>
  