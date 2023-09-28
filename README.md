```
const TOOLTIPS = [
    t('Enter "hello"', page.loginInput().shouldHaveText('hello')),
    t('Enter "password"', page.passwordInput().shouldHaveText('password')),
    t('Sort table by "firstName" column', page.usersTable().shouldBeSorted('firstName')),
    t('Sort table by "lastName" column', page.usersTable().shouldBeSorted('lastName')),
    t('Press Submit button', page.submitButton().shouldBeClicked()),
];
```