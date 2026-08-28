"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Select } from "@/components/ui/Select";

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "e.g. John Smith", span: 2 },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(403) XXX-XXXX", span: 1 },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", span: 1 },
  { name: "city", label: "City", type: "text", placeholder: "e.g. Calgary", span: 1 },
  { name: "vehicle", label: "Vehicle", type: "text", placeholder: "e.g. 2010 Honda Civic", span: 1 },
];

const VEHICLE_CONDITION_OPTIONS = [
  { value: "Runs and drives", label: "Runs and drives" },
  { value: "Starts but is not drivable", label: "Starts but is not drivable" },
  { value: "Does not start", label: "Does not start" },
  { value: "Accident or body damage", label: "Accident or body damage" },
  { value: "Other", label: "Other" },
];

const OWNERSHIP_OPTIONS = [
  { value: "Registered owner", label: "Registered owner" },
  { value: "Ownership document available", label: "Ownership document available" },
  { value: "Need paperwork guidance", label: "Need paperwork guidance" },
  { value: "Prefer to discuss", label: "Prefer to discuss" },
];

const PICKUP_TIMING_OPTIONS = [
  { value: "Today", label: "Today" },
  { value: "Within 1-2 days", label: "Within 1-2 days" },
  { value: "This week", label: "This week" },
  { value: "Flexible", label: "Flexible" },
];

export function QuoteForm({ ticketNumber = "AB-04521", bare = false }) {
  const [status, setStatus] = useState("idle");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [vehicleCondition, setVehicleCondition] = useState(null);
  const [ownershipStatus, setOwnershipStatus] = useState(null);
  const [pickupTiming, setPickupTiming] = useState(null);
  const formId = useId();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitted");
  }

  const card = (
    <div
      className={
        bare
          ? "bg-paper"
          : "rounded-[28px] border border-line-onDark bg-paper shadow-[0_40px_80px_-32px_rgba(10,19,48,0.55)]"
      }
    >
      <div className="flex items-center justify-between gap-4 px-8 pt-7 pb-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-500">
            Vehicle intake · Request #{ticketNumber}
          </p>
          <h3 className="mt-1.5 font-display text-[1.5rem] font-semibold leading-tight text-navy-950">
            Get Your Cash Offer
          </h3>
        </div>
        <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-950 font-mono text-[10px] font-medium text-paper">
          $
        </span>
      </div>

      <form onSubmit={handleSubmit} className="px-8 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {FIELDS.map((field) => (
              <FormField key={field.name} field={field} formId={formId} />
            ))}

            <div className="col-span-2">
              <label
                htmlFor={`${formId}-reason`}
                className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-500"
              >
                Why are you selling your car?
              </label>
              <textarea
                id={`${formId}-reason`}
                name="reason"
                rows={2}
                placeholder="Tell us why you're selling your car..."
                className="mt-2 w-full resize-none rounded-xl border border-transparent bg-navy-950/3 px-4 py-3 font-body text-[14.5px] text-navy-950 placeholder:text-slate-400 transition-all duration-200 hover:bg-navy-950/5 focus:border-royal-500 focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(59,92,240,0.14)]"
              />
            </div>
          </div>

          <div className="mt-2 border-t border-navy-950/10">
            <button
              type="button"
              onClick={() => setDetailsOpen((o) => !o)}
              aria-expanded={detailsOpen}
              className="flex w-full items-center justify-between gap-2 py-4 text-left"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-600">
                Add vehicle details{" "}
                <span className="text-slate-400 normal-case tracking-normal">(optional)</span>
              </span>
              <ChevronDown
                className={`size-4 shrink-0 text-slate-400 transition-transform duration-300 ease-out ${
                  detailsOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            <AnimatePresence initial={false}>
              {detailsOpen && (
                <motion.div
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-4 pb-5">
                    <Select
                      label="Vehicle condition"
                      name="vehicle_condition"
                      options={VEHICLE_CONDITION_OPTIONS}
                      value={vehicleCondition}
                      onChange={setVehicleCondition}
                    />
                    <Select
                      label="Ownership / paperwork"
                      name="ownership_status"
                      options={OWNERSHIP_OPTIONS}
                      value={ownershipStatus}
                      onChange={setOwnershipStatus}
                    />
                    <div className="col-span-2">
                      <Select
                        label="Preferred pickup timing"
                        name="pickup_timing"
                        options={PICKUP_TIMING_OPTIONS}
                        value={pickupTiming}
                        onChange={setPickupTiming}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tear-line separating the intake fields from the submit action, like a ticket stub */}
          <div
            aria-hidden="true"
            className="my-1 h-px w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--color-navy-950) 0 6px, transparent 6px 12px)",
              opacity: 0.18,
            }}
          />

          <button
            type="submit"
            disabled={status === "submitted"}
            className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-4 font-body text-[15px] font-semibold text-navy-950 transition-colors duration-300 hover:bg-accent-hover disabled:cursor-default disabled:opacity-70"
          >
            {status === "submitted" ? "Request Received" : "Get My Quote"}
          </button>

          <p className="mt-3 text-center font-mono text-[10.5px] uppercase tracking-widest text-slate-400">
            Secure form · No obligation
          </p>
        </form>
    </div>
  );

  if (bare) return card;

  return (
    <div className="relative w-full max-w-150">
      {card}

      {/* Ambient offer badge, anchored to the ticket like a stamped corner */}
      <motion.div
        initial={{ opacity: 0, y: 10, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-4 -top-4 hidden select-none items-center gap-1.5 rounded-full border border-navy-950/10 bg-accent px-4 py-2 font-mono text-[11px] font-medium text-navy-950 shadow-lg sm:flex"
      >
        $300–$10,000
      </motion.div>
    </div>
  );
}

function FormField({ field, formId }) {
  const id = `${formId}-${field.name}`;
  return (
    <div className={field.span === 2 ? "col-span-2" : "col-span-1"}>
      <label
        htmlFor={id}
        className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-500"
      >
        {field.label}
      </label>
      <input
        id={id}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required
        className="mt-2 w-full rounded-xl border border-transparent bg-navy-950/3 px-4 py-3 font-body text-[14.5px] text-navy-950 placeholder:text-slate-400 transition-all duration-200 hover:bg-navy-950/5 focus:border-royal-500 focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(59,92,240,0.14)]"
      />
    </div>
  );
}
