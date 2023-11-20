import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import  Modal  from '../components/Modal.tsx';

export default {
    title: 'Modal',
    component: Modal
  } as Meta;

type Story = StoryObj<typeof Modal>;

export const Baz: Story = {};