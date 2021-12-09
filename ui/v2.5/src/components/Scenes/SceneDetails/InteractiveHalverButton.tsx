import React from "react";
import cx from "classnames";
import { Button, Spinner } from "react-bootstrap";
import { Icon } from "src/components/Shared";
import { defineMessages, useIntl } from "react-intl";

export interface IInteractiveHalverButtonProps {
  loading: boolean;
  interactive_halve: boolean;
  onClick: () => void;
}

export const InteractiveHalverButton: React.FC<IInteractiveHalverButtonProps> = (
  props: IInteractiveHalverButtonProps
) => {
  const intl = useIntl();
  const messages = defineMessages({
    organized: {
      id: "interactive_halve",
      defaultMessage: "Halve script speed",
    },
  });

  if (props.loading) return <Spinner animation="border" role="status" />;

  return (
    <Button
      variant="secondary"
      title={intl.formatMessage(messages.organized)}
      className={cx(
        "minimal",
        "interactive-halve-button",
        props.interactive_halve ? "interactive-halve" : "not-interactive-halve"
      )}
      onClick={props.onClick}
    >
      <Icon icon="tachometer-alt" />
    </Button>
  );
};
