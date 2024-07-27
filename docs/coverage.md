## introduce coverage

```
$ pnpm coverage

> todo-next-app@1.0.0 coverage /Users/uchinishi.koichi/train/todo-app
> vitest run --coverage


 RUN  v2.0.4 /Users/uchinishi.koichi/train/todo-app
      Coverage enabled with v8

 ✓ src/tests/Loading.test.tsx  (1 test) 17ms
 ✓ src/tests/Menubar.test.tsx  (1 test) 18ms

 Test Files  2 passed (2)
      Tests  2 passed (2)
   Start at  13:33:42
   Duration  1.04s (transform 45ms, setup 152ms, collect 285ms, tests 35ms, environment 585ms, prepare 92ms)

 % Coverage report from v8
---------------------------------------|---------|----------|---------|---------|-------------------
File                                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------------------|---------|----------|---------|---------|-------------------
All files                              |    1.53 |    13.69 |    8.69 |    1.53 |
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
 src/components/dashboard              |       0 |    11.11 |   11.11 |       0 |
  app-menu.tsx                         |       0 |        0 |       0 |       0 | 1-50
  app-sidebar.tsx                      |       0 |        0 |       0 |       0 | 1-62
  client-todo-table.tsx                |       0 |        0 |       0 |       0 | 1-482
  create-todo-modal.tsx                |       0 |        0 |       0 |       0 | 1-301
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
 src/components/ui                     |       0 |        0 |       0 |       0 |
  avatar.tsx                           |       0 |        0 |       0 |       0 | 1-48
  button.tsx                           |       0 |        0 |       0 |       0 | 1-54
  calendar.tsx                         |       0 |        0 |       0 |       0 | 1-62
  canvas.tsx                           |       0 |        0 |       0 |       0 | 1-78
  collapsible.tsx                      |       0 |        0 |       0 |       0 | 1-9
  dropdown-menu.tsx                    |       0 |        0 |       0 |       0 | 1-182
  form.tsx                             |       0 |        0 |       0 |       0 | 1-165
  input.tsx                            |       0 |        0 |       0 |       0 | 1-23
  label.tsx                            |       0 |        0 |       0 |       0 | 1-24
  menubar.tsx                          |       0 |        0 |       0 |       0 | 1-217
  popover.tsx                          |       0 |        0 |       0 |       0 | 1-29
  scroll-area.tsx                      |       0 |        0 |       0 |       0 | 1-51
  separator.tsx                        |       0 |        0 |       0 |       0 | 1-29
  toast.tsx                            |       0 |        0 |       0 |       0 | 1-111
  toaster.tsx                          |       0 |        0 |       0 |       0 | 1-35
  tooltip.tsx                          |       0 |        0 |       0 |       0 | 1-28
  use-toast.ts                         |       0 |        0 |       0 |       0 | 1-187
 src/hooks                             |       0 |        0 |       0 |       0 |
  useMousePosition.tsx                 |       0 |        0 |       0 |       0 | 1-27
 src/lib                               |       0 |    28.57 |   28.57 |       0 |
  api.ts                               |       0 |        0 |       0 |       0 |
  auth.ts                              |       0 |        0 |       0 |       0 | 1-153
  db.ts                                |       0 |        0 |       0 |       0 | 1-19
  interface.ts                         |       0 |        0 |       0 |       0 |
  session.ts                           |       0 |        0 |       0 |       0 | 1-12
  toastCatch.tsx                       |       0 |        0 |       0 |       0 | 1-34
  utils.ts                             |       0 |        0 |       0 |       0 | 1-55
 src/lib/actions/authenticate          |       0 |        0 |       0 |       0 |
  index.ts                             |       0 |        0 |       0 |       0 | 1-44
  validation.ts                        |       0 |        0 |       0 |       0 | 1-14
 src/lib/actions/todos                 |       0 |        0 |       0 |       0 |
  index.ts                             |       0 |        0 |       0 |       0 | 1-104
  optimisticAction.ts                  |       0 |        0 |       0 |       0 | 1-32
  validations.ts                       |       0 |        0 |       0 |       0 | 1-44
 src/stories                           |     100 |      100 |     100 |     100 |
  Loading.stories.tsx                  |     100 |      100 |     100 |     100 |
  Menubar.stories.tsx                  |     100 |      100 |     100 |     100 |
 src/tests                             |     100 |      100 |     100 |     100 |
  Loading.test.tsx                     |     100 |      100 |     100 |     100 |
  Menubar.test.tsx                     |     100 |      100 |     100 |     100 |
---------------------------------------|---------|----------|---------|---------|-------------------
```