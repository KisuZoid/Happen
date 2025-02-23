import { useState } from "react";
import { ImageIcon, Ticket } from "lucide-react";
import { format } from "date-fns";

const Button = ({ children, className, ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <button className={`px-4 py-2 rounded-lg font-medium ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className, ...props }: { className?: string, [key: string]: any }) => (
  <input
    className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }: { className?: string, [key: string]: any }) => (
  <textarea
    className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    rows={4}
    {...props}
  />
);

const Switch = ({ checked, onCheckedChange }: { checked: boolean, onCheckedChange: (checked: boolean) => void }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
    />
    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-purple-600"></div>
  </label>
);

const Calendar = ({ selected, onSelect }: { selected: Date, onSelect: (date: Date) => void }) => (
  <input
    type="date"
    value={format(selected, "yyyy-MM-dd")}
    onChange={(e) => onSelect(new Date(e.target.value))}
    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
);

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white text-black rounded-2xl shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Select = ({ value, onValueChange, children }: { value: string, onValueChange: (value: string) => void, children: React.ReactNode }) => (
  <select
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
  >
    {children}
  </select>
);

const SelectItem = ({ value, children }: { value: string, children: React.ReactNode }) => <option value={value}>{children}</option>;

export default function CreateEvent() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requireApproval, setRequireApproval] = useState(false);
  const [tickets, setTickets] = useState("Free");
  const [capacity, setCapacity] = useState("Unlimited");
  const [theme, setTheme] = useState("Minimal");
  const [calendarType, setCalendarType] = useState("Personal Calendar");
  const [visibility, setVisibility] = useState("Public");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-purple-900 text-white rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative">
          <Card className="">
            <CardContent className="p-0">
              <img
                src="data:image/jpeg;base64,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"
                alt="Event Cover"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <Button className="absolute bottom-2 right-2 bg-white text-black rounded-full p-2">
                <ImageIcon size={20} />
              </Button>
            </CardContent>
          </Card>

          <div className="mt-4 text-gray-300">
            <span className="block mb-1 ">Theme</span>
            <Select value={theme} onValueChange={setTheme}>
              <SelectItem value="Minimal">Minimal</SelectItem>
              <SelectItem value="Vibrant">Vibrant</SelectItem>
              <SelectItem value="Classic">Classic</SelectItem>
            </Select>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between gap-4">
            <Select value={calendarType} onValueChange={setCalendarType}>
              <SelectItem value="Personal Calendar">Personal Calendar</SelectItem>
              <SelectItem value="Work Calendar">Work Calendar</SelectItem>
            </Select>
            <Select value={visibility} onValueChange={setVisibility}>
              <SelectItem value="Public">Public</SelectItem>
              <SelectItem value="Private">Private</SelectItem>
            </Select>
          </div>

          <Input placeholder="Event Name" className="text-2xl font-semibold" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="block mb-1">Start Date</span>
              <Calendar selected={startDate} onSelect={setStartDate} />
            </div>
            <div>
              <span className="block mb-1">End Date</span>
              <Calendar selected={endDate} onSelect={setEndDate} />
            </div>
          </div>

          <Input
            placeholder="Add Event Location"
            value={location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
            className=""
          />
          <Textarea
            placeholder="Add Description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            className=""
          />
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="flex items-center"><Ticket className="mr-2" />Tickets</span>
              <Input
                value={tickets}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTickets(e.target.value)}
                className="w-24 text-right"
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Require Approval</span>
              <Switch checked={requireApproval} onCheckedChange={setRequireApproval} />
            </div>

            <div className="flex justify-between items-center">
              <span>Capacity</span>
              <Input
                value={capacity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCapacity(e.target.value)}
                className="w-24 text-right"
              />
            </div>
          </div>
            </div>
          </div>

          <Button className="w-full bg-white text-black font-semibold py-2 mt-4">
            Create Event
          </Button>
        </div>
  );
}
