## introduce coverage

```
$ pnpm coverage

> todo-next-app@1.0.0 coverage /Users/uchinishi.koichi/train/todo-app
> vitest run --coverage


 RUN  v2.0.4 /Users/uchinishi.koichi/train/todo-app
      Coverage enabled with v8

 ✓ src/tests/CreateTodoModal.test.tsx (1)
 ✓ src/tests/Loading.test.tsx (1)
 ✓ src/tests/Menubar.test.tsx (1)

 Test Files  3 passed (3)
      Tests  3 passed (3)
   Start at  14:14:55
   Duration  2.51s (transform 164ms, setup 353ms, collect 1.81s, tests 62ms, environment 1.15s, prepare 143ms)

 % Coverage report from v8
---------------------------------------|---------|----------|---------|---------|--------------------------------------------------
File                                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------------------|---------|----------|---------|---------|--------------------------------------------------
All files                              |    8.13 |    21.53 |    9.75 |    8.13 |
 src                                   |       0 |        0 |       0 |       0 |
  middleware.ts                        |       0 |        0 |       0 |       0 | 1-46
 src/app                               |       0 |    16.66 |   16.66 |       0 |
  error.tsx                            |       0 |        0 |       0 |       0 | 1-50
  icon.tsx                             |       0 |        0 |       0 |       0 | 1-40
  layout.tsx                           |       0 |        0 |       0 |       0 | 1-45
  loading.tsx                          |       0 |        0 |       0 |       0 | 1-9
  page.tsx                             |       0 |        0 |       0 |       0 | 1-44
  robot.ts                             |       0 |      100 |     100 |       0 | 3-10
 src/app/(apps)/todo                   |       0 |        0 |       0 |       0 |
  layout.tsx                           |       0 |        0 |       0 |       0 | 1-31
  page.tsx                             |       0 |        0 |       0 |       0 | 1-23
 src/app/(apps)/userstories            |       0 |        0 |       0 |       0 |
  layout.tsx                           |       0 |        0 |       0 |       0 | 1-27
  page.tsx                             |       0 |        0 |       0 |       0 | 1-16
 src/app/(auth)/api/auth/[...nextauth] |       0 |        0 |       0 |       0 |
  route.ts                             |       0 |        0 |       0 |       0 | 1-6
 src/app/(auth)/login                  |       0 |        0 |       0 |       0 |
  page.tsx                             |       0 |        0 |       0 |       0 | 1-101
 src/app/(auth)/register               |       0 |        0 |       0 |       0 |
  page.tsx                             |       0 |        0 |       0 |       0 | 1-80
 src/components/dashboard              |    1.24 |     12.5 |   11.11 |    1.24 |
  app-menu.tsx                         |       0 |        0 |       0 |       0 | 1-50
  app-sidebar.tsx                      |       0 |        0 |       0 |       0 | 1-62
  client-todo-table.tsx                |       0 |        0 |       0 |       0 | 1-482
  create-todo-modal.tsx                |    6.17 |      100 |       0 |    6.17 | 49-301
  delete-todo-modal.tsx                |       0 |        0 |       0 |       0 | 1-130
  edit-todo-modal.tsx                  |       0 |        0 |       0 |       0 | 1-320
  todo-table.config.ts                 |       0 |      100 |     100 |       0 | 6-74
  todo-table.tsx                       |       0 |        0 |       0 |       0 | 1-26
  user-stories.tsx                     |       0 |        0 |       0 |       0 | 1-101
 src/components/global                 |    2.16 |    11.11 |   11.11 |    2.16 |
  auth-form.tsx                        |       0 |        0 |       0 |       0 | 1-159
  dropdown-theme.tsx                   |       0 |        0 |       0 |       0 | 1-39
  loading.tsx                          |     100 |      100 |     100 |     100 |
  providers.tsx                        |       0 |        0 |       0 |       0 | 1-27
  skeletons.tsx                        |       0 |        0 |       0 |       0 | 1-218
  switch-theme.tsx                     |       0 |        0 |       0 |       0 | 1-25
  tailwind-indicator.tsx               |       0 |        0 |       0 |       0 | 1-16
  toggle-theme.tsx                     |       0 |        0 |       0 |       0 | 1-40
  user-avatar.tsx                      |       0 |        0 |       0 |       0 | 1-46
 src/components/landing                |       0 |        0 |       0 |       0 |
  canvas.tsx                           |       0 |        0 |       0 |       0 | 1-86
  landingpage-menu.tsx                 |       0 |        0 |       0 |       0 | 1-30
  particle.tsx                         |       0 |        0 |       0 |       0 | 1-251
  signin-button.tsx                    |       0 |        0 |       0 |       0 | 1-10
  signout-dropdown.tsx                 |       0 |        0 |       0 |       0 | 1-17
  user-menu.tsx                        |       0 |        0 |       0 |       0 | 1-80
 src/components/ui                     |   13.79 |        0 |       0 |   13.79 |
  avatar.tsx                           |       0 |        0 |       0 |       0 | 1-48
  button.tsx                           |   81.81 |      100 |     100 |   81.81 | 44-52
  calendar.tsx                         |    10.9 |      100 |       0 |    10.9 | 12-61
  canvas.tsx                           |       0 |        0 |       0 |       0 | 1-78
  collapsible.tsx                      |       0 |        0 |       0 |       0 | 1-9
  dropdown-menu.tsx                    |       0 |        0 |       0 |       0 | 1-182
  form.tsx                             |   27.61 |      100 |       0 |   27.61 | 32-40,43-63,77-84,91-101,108-123,130-140,147-164
  input.tsx                            |       0 |        0 |       0 |       0 | 1-23
  label.tsx                            |    64.7 |      100 |     100 |    64.7 | 18-23
  menubar.tsx                          |       0 |        0 |       0 |       0 | 1-217
  popover.tsx                          |       0 |        0 |       0 |       0 | 1-29
  scroll-area.tsx                      |       0 |        0 |       0 |       0 | 1-51
  separator.tsx                        |       0 |        0 |       0 |       0 | 1-29
  toast.tsx                            |   44.82 |      100 |     100 |   44.82 | 14-22,46-53,60-68,75-86,93-98,105-110
  toaster.tsx                          |       0 |        0 |       0 |       0 | 1-35
  tooltip.tsx                          |       0 |        0 |       0 |       0 | 1-28
  use-toast.ts                         |   12.59 |      100 |       0 |   12.59 | 25-28,57-70,73-125,131-187
 src/hooks                             |       0 |        0 |       0 |       0 |
  useMousePosition.tsx                 |       0 |        0 |       0 |       0 | 1-27
 src/lib                               |    14.5 |       60 |      25 |    14.5 |
  api.ts                               |       0 |        0 |       0 |       0 |
  auth.ts                              |       0 |        0 |       0 |       0 | 1-153
  db.ts                                |     100 |      100 |     100 |     100 |
  interface.ts                         |       0 |        0 |       0 |       0 |
  session.ts                           |       0 |        0 |       0 |       0 | 1-12
  toastCatch.tsx                       |   13.79 |      100 |       0 |   13.79 | 8-34
  utils.ts                             |   38.09 |      100 |       0 |   38.09 | 6-7,10-11,14-15,18-19,22-33,37-47
 src/lib/actions/authenticate          |       0 |        0 |       0 |       0 |
  index.ts                             |       0 |        0 |       0 |       0 | 1-44
  validation.ts                        |       0 |        0 |       0 |       0 | 1-14
 src/lib/actions/todos                 |   28.36 |        0 |       0 |   28.36 |
  index.ts                             |    9.41 |      100 |       0 |    9.41 | 14-24,27-49,52-77,80-104
  optimisticAction.ts                  |       0 |        0 |       0 |       0 | 1-32
  validations.ts                       |     100 |      100 |     100 |     100 |
 src/stories                           |   96.36 |      100 |      50 |   96.36 |
  CreateTodoModal.stories.tsx          |   93.54 |      100 |   33.33 |   93.54 | 25-26
  Loading.stories.tsx                  |     100 |      100 |     100 |     100 |
  Menubar.stories.tsx                  |     100 |      100 |     100 |     100 |
 src/tests                             |     100 |      100 |     100 |     100 |
  CreateTodoModal.test.tsx             |     100 |      100 |     100 |     100 |
  Loading.test.tsx                     |     100 |      100 |     100 |     100 |
  Menubar.test.tsx                     |     100 |      100 |     100 |     100 |
---------------------------------------|---------|----------|---------|---------|--------------------------------------------------
```