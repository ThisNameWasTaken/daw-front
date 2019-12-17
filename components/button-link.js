import React from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';

const ButtonLink = React.forwardRef(({ href, as, prefetch, ...props }, ref) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <Button ref={ref} {...props} />
  </Link>
));

export default ButtonLink;
