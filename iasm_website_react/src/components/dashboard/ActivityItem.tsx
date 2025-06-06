import React from 'react';

interface ActivityItemProps {
  activity: string;
  timestamp: string;
  user?: string; // Optional: if you want to show who performed the action
  icon?: React.ReactNode; // Optional: for different types of activities
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, timestamp, user, icon }) => {
  return (
    <div className="flex items-start space-x-3 py-3 border-b last:border-b-0">
      {icon && <div className="flex-shrink-0 mt-1 text-muted-foreground">{icon}</div>}
      <div className="flex-grow">
        <p className="text-sm">
          {activity}
          {user && <span className="font-medium text-primary"> by {user}</span>}
        </p>
        <p className="text-xs text-muted-foreground">{timestamp}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
