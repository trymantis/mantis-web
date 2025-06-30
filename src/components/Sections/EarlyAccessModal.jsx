import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { PrimaryBtn, SecondaryBtn } from "../Elements/Buttons";
import { H3, P2 } from "../Elements/Texts";
import EarlyAccess from "../../assets/EarlyAccess.svg";

const EarlyAccessModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    datetime: new Date().toISOString(),
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const roles = [
    "CEO / Founder",
    "CFO (Chief Financial Officer)",
    "Head of Finance / Finance Controller",
    "Head of Reconciliation",
    "Settlement Operations Manager",
    "Treasury Manager",
    "Head of Internal Audit / Risk",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formData.role) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyTrTYiPjd_lg4zefJPhaOe3IygNWDNtiptTHbyAajvCZ8B98OXVjD8K20kQD9Hx3Oi/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleScheduleDemo = () => {
    const calendlyUrl = "https://calendar.app.google/BeF6mfyFkoKZyzfD6";
    const prefillParams = new URLSearchParams({
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
    }).toString();
    window.open(`${calendlyUrl}?${prefillParams}`, "_blank");
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      validateEmail(formData.email) &&
      formData.organization.trim() &&
      formData.role
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] md:max-w-5xl md:p-2">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="hidden md:block w-[50%] bg-gray-100">
            <img
              src={EarlyAccess}
              alt="Early Access"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Form and Demo */}
          <div className="w-full md:w-[50%] px-4 py-4 md:px-8">
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700 text-sm">
                  You're in! We'll keep you posted as we get closer to launch.
                </p>
              </div>
            )}

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-2 w-full">
              <div className="pb-4">
                <H3 content="Join the Waitlist" color="black" align="left" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="space-y-1 w-full">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. John"
                    required
                    className={`w-full ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Doe"
                    required
                    className={`w-full ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. johndoe@acme.com"
                  required
                  className={`w-full ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="e.g Acme Inc."
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className={`w-full ${
                    errors.organization ? "border-red-500" : ""
                  }`}
                />
                {errors.organization && (
                  <p className="text-red-500 text-xs">{errors.organization}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="role">Role</Label>
                <Select
                  name="role"
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, role: value }))
                  }
                >
                  <SelectTrigger
                    className={`${errors.role ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="What's your role on the team?" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-red-500 text-xs">{errors.role}</p>
                )}
              </div>
              <div className="flex justify-start md:justify-end">
                <PrimaryBtn
                  title={isLoading ? "Submitting..." : "Join Early Access (2 Months Free)"}
                  type="submit"
                  disabled={!isFormValid() || isLoading}
                />
              </div>
            </form>

            {/* Divider */}
            <div className="my-4 border-t border-gray-200" />

            {/* Demo Section */}
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
              <P2 content="See Mantis in action." color="text-gray-600" />
              <div className="w-auto">
                <SecondaryBtn
                  title="Schedule a demo"
                  className="border-green text-green"
                  onClick={handleScheduleDemo}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessModal;
