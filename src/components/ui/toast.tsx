import * as React from "react";

export interface ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface ToastActionElement {
  altText: string;
  action: () => void;
}

export const Toast = ({ title, description, action }: ToastProps) => {
  return (
    <div className="card-glass p-4 mb-2">
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm text-muted-foreground">{description}</div>}
      {action && (
        <button onClick={action.action} className="text-primary text-sm mt-2">
          {action.altText}
        </button>
      )}
    </div>
  );
};
