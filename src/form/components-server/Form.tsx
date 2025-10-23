// import React from "react";
// import { cn } from "@core-server"; 

// // --- FormRoot ---

// export type FormProps = React.HTMLAttributes<HTMLFormElement>;

// /**
//  * The root <form> element. All other form components
//  * should be nested inside this.
//  */
// export const FormRoot = React.forwardRef<HTMLFormElement, FormProps>(
//   ({ className, ...props }, ref) => {
//     return (
//       <form
//         ref={ref}
//         className={cn("flex flex-col gap-6", className)}
//         {...props}
//       />
//     );
//   }
// );
// FormRoot.displayName = "FormRoot";

// // --- FormSection ---

// export type FormSectionProps = React.HTMLAttributes<HTMLDivElement> & {
//   title: React.ReactNode;
//   description?: React.ReactNode;
//   footer?: React.ReactNode;
// };

// /**
//  * A styled wrapper to group related form fields.
//  * Includes slots for a title, description, and footer.
//  */
// export const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
//   (
//     { className, title, description, footer, children, ...props },
//     ref
//   ) => {
//     return (
//       <div
//         ref={ref}
//         className={cn("flex flex-col border rounded-lg", className)}
//         {...props}
//       >
//         {/* Header */}
//         <div className="flex flex-col gap-1 p-4 md:p-6">
//           <h3 className="font-semibold text-lg">{title}</h3>
//           {description && (
//             <p className="text-sm text-muted-foreground">{description}</p>
//           )}
//         </div>

//         {/* Content (Fields) */}
//         <div className="flex flex-col gap-4 p-4 md:p-6 border-t">
//           {children}
//         </div>

//         {/* Footer */}
//         {footer && (
//           <div className="p-4 md:p-6 border-t bg-muted/50 rounded-b-lg text-sm text-muted-foreground">
//             {footer}
//           </div>
//         )}
//       </div>
//     );
//   }
// );
// FormSection.displayName = "FormSection";

// // --- FormField ---

// export type FormFieldProps = React.HTMLAttributes<HTMLDivElement> & {
//   label: string;
//   description?: string;
//   error?: string;
// };

// /**
//  * A component to wrap a single input, connecting the label,
//  * description, and error message to it for accessibility.
//  *
//  * It expects a *single* child element (e.g., <input>, <textarea>, <select>)
//  * and will automatically inject the required 'id' and 'aria' attributes.
//  */
// export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
//   ({ className, label, description, error, children, ...props }, ref) => {
//     // Generate a unique ID for the input and its related elements
//     const id = React.useId();
//     const descriptionId = description ? `${id}-description` : undefined;
//     const errorId = error ? `${id}-error` : undefined;

//     // Build the 'aria-describedby' string
//     const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");

//     // Clone the child <input> to inject accessibility props
//     let inputElement: React.ReactNode;
//     try {
//       const child = React.Children.only(children) as React.ReactElement;
//       inputElement = React.cloneElement(child, {
//         id: child.props.id || id,
//         "aria-describedby": describedBy || undefined,
//         "aria-invalid": !!error,
//         "aria-errormessage": errorId || undefined,
//         ...child.props, // Allow user to override
//       });
//     } catch (e) {
//       console.error(
//         "FormField: The 'children' prop must be a single React element (e.g., <input>)."
//       );
//       inputElement = children; // Fallback to render children as-is
//     }

//     return (
//       <div
//         ref={ref}
//         className={cn("flex flex-col gap-2", className)}
//         {...props}
//       >
//         {/* Label and Description */}
//         <div className="flex flex-col gap-1">
//           <label htmlFor={id} className="text-sm font-medium">
//             {label}
//           </label>
//           {description && (
//             <p id={descriptionId} className="text-sm text-muted-foreground">
//               {description}
//             </p>
//           )}
//         </div>

//         {/* Input Control */}
//         <div>{inputElement}</div>

//         {/* Error Message */}
//         {error && (
//           <p id={errorId} className="text-sm font-medium text-destructive">
//             {error}
//           </p>
//         )}
//       </div>
//     );
//   }
// );
// FormField.displayName = "FormField";