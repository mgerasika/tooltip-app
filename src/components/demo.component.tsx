/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { InputTooltipConfig } from '../tooltips/input-tooltip/input-tooltip-config.class';
import { ButtonTooltipConfig } from '../tooltips/button-tooltip/button-tooltip-config.class';
import { useTooltip } from '../hooks/use-tooltip.hook';
import { TableTooltipConfig } from '../tooltips/table-tooltip/table-tooltip-config.class';
import { Input } from '@src/general-ui/input/input.component';
import { Button } from '@src/general-ui/button/button.component';
import { ITableColumn, Table } from '@src/general-ui/table/table.component';
import { css } from '@emotion/react';
import { t } from '@src/tooltips/tooltip.panel';

const page = {
    loginInput: () => new InputTooltipConfig('#login'),
    passwordInput: () => new InputTooltipConfig('#password'),
    usersTable: () => new TableTooltipConfig('#table'),
    submitButton: () => new ButtonTooltipConfig('#submit'),
};

const tableColumns: ITableColumn[] = [
    {
        name: 'firstName',
        title: 'First Name',
    },
    {
        name: 'lastName',
        title: 'Last Name',
    },
];

const dataSource = [
    {
        firstName: 'John',
        lastName: 'Adabamba',
    },
    {
        firstName: 'Olga',
        lastName: 'Nha',
    },
    {
        firstName: 'Andriy',
        lastName: 'Xex',
    },
    {
        firstName: 'Rey',
        lastName: 'Obra',
    },
];

const TOOLTIPS = [
    t('Enter "hello"', page.loginInput().shouldHaveText('hello')),
    t('Enter "password"', page.passwordInput().shouldHaveText('password')),
    t('Sort table by "firstName" column', page.usersTable().shouldBeSorted('firstName')),
    t('Sort table by "lastName" column', page.usersTable().shouldBeSorted('lastName')),
    t('Press Submit button', page.submitButton().shouldBeClicked()),
];
export const Demo = (): JSX.Element => {
    useTooltip({
        initial: TOOLTIPS,
    });

    return (
        <div css={classes.form}>
            <Input id="login" type="text" label="Login" />
            <Input id="password" type="password" label="Password" />
            <Table id="table" columns={tableColumns} dataSource={dataSource} />
            <Button id="submit">Login</Button>
        </div>
    );
};

const classes = {
    form: css`
        display: flex;
        row-gap: 16px;
        flex-direction: column;
    `,
};
