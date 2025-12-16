"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const AddProductFrom = ({ user }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handelSubmit = async (e) => {};

  return (
    <>
      <form onSubmit={handelSubmit} className="w-full max-w-2xl mx-auto">
        <div className="flex felx-col sm:flex-row gap-2">
          <Input
            type="url"
            value={url}
            onchange={(e) => setUrl(e.target.value)}
            placeholder="Enter product url (Amazon Walmart etc)"
            className="h-12 text-base"
            required
            disabled={loading}
          />
          <Button
            className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8"
            type="submit"
            disabled={loading}
            size={"lg"}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding..
              </>
            ) : (
              "Track Price"
            )}
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddProductFrom;
