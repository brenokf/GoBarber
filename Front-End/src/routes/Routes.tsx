import React from 'react';
import { RouteProps, Route as ReactRouteDom, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RoutePropsRouterDom extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteDom: React.FC<RoutePropsRouterDom> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  console.log(user, isPrivate);
  return (
    <ReactRouteDom
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteDom;
